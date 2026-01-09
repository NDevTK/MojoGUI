/**
 * MojoJS Binding Parser
 * Client-side parser for .mojom.js files
 */

(function(global) {
    'use strict';

    const MojoParser = {
        /**
         * Parse a .mojom.js file content and extract interface metadata
         * @param {string} content - The JavaScript binding content
         * @returns {Object} Parsed metadata
         */
        parseBinding(content) {
            const result = {
                module: null,
                interfaces: [],
                structs: [],
                enums: []
            };

            try {
                // Extract module from comment
                const moduleMatch = content.match(/\/\/\s*Module:\s*([\w.]+)/);
                if (moduleMatch) {
                    result.module = moduleMatch[1];
                }

                // Extract interfaces
                const interfacePattern = /(\w+)\.(\w+)Ptr\s*=\s*class\s*\{/g;
                let match;
                while ((match = interfacePattern.exec(content)) !== null) {
                    const interfaceName = match[2].replace(/Ptr$/, '');
                    const startPos = match.index;
                    
                    // Find the methods in this class
                    const methods = this.extractMethods(content, startPos);
                    
                    result.interfaces.push({
                        name: interfaceName,
                        namespace: match[1],
                        methods: methods
                    });
                }

                // Extract enums
                const enumPattern = /(\w+(?:\.\w+)*)\s*=\s*\{([^}]+)\};/g;
                while ((match = enumPattern.exec(content)) !== null) {
                    const enumBody = match[2];
                    if (enumBody.includes(':')) {
                        const values = [];
                        const valueMatches = enumBody.matchAll(/(\w+):\s*(\d+)/g);
                        for (const vm of valueMatches) {
                            values.push({ name: vm[1], value: parseInt(vm[2]) });
                        }
                        if (values.length > 0) {
                            const enumName = match[1].split('.').pop();
                            result.enums.push({
                                name: enumName,
                                fullName: match[1],
                                values: values
                            });
                        }
                    }
                }

                // Extract structs
                const structPattern = /(\w+(?:\.\w+)*)\s*=\s*class\s*\{\s*constructor\s*\(values\s*=\s*\{\}\)\s*\{([^}]+)\}/g;
                while ((match = structPattern.exec(content)) !== null) {
                    const structBody = match[2];
                    const fields = [];
                    const fieldMatches = structBody.matchAll(/this\.(\w+)\s*=/g);
                    for (const fm of fieldMatches) {
                        fields.push({ name: fm[1] });
                    }
                    if (fields.length > 0) {
                        const structName = match[1].split('.').pop();
                        if (!structName.endsWith('Ptr') && !structName.endsWith('Request')) {
                            result.structs.push({
                                name: structName,
                                fullName: match[1],
                                fields: fields
                            });
                        }
                    }
                }
            } catch (error) {
                console.error('Error parsing binding:', error);
            }

            return result;
        },

        /**
         * Extract methods from a class definition
         * @param {string} content - Full content
         * @param {number} classStart - Starting position of the class
         * @returns {Array} Array of method objects
         */
        extractMethods(content, classStart) {
            const methods = [];
            
            // Find the class body
            let braceCount = 0;
            let inClass = false;
            let classEnd = content.length;
            
            for (let i = classStart; i < content.length; i++) {
                if (content[i] === '{') {
                    braceCount++;
                    inClass = true;
                } else if (content[i] === '}') {
                    braceCount--;
                    if (inClass && braceCount === 0) {
                        classEnd = i;
                        break;
                    }
                }
            }
            
            const classBody = content.substring(classStart, classEnd);
            
            // Find method definitions
            const methodPattern = /(\w+)\s*\(([^)]*)\)\s*\{/g;
            let match;
            
            while ((match = methodPattern.exec(classBody)) !== null) {
                const methodName = match[1];
                const paramsStr = match[2].trim();
                
                // Skip constructor and internal methods
                if (methodName === 'constructor' || methodName.startsWith('_')) {
                    continue;
                }
                
                const params = paramsStr ? paramsStr.split(',').map(p => {
                    const name = p.trim();
                    return { name: name, type: this.inferType(name) };
                }) : [];
                
                // Check if method returns a Promise
                const methodStart = match.index;
                const methodBodyMatch = classBody.substring(methodStart).match(/\{([^}]*)\}/);
                const hasReturn = methodBodyMatch && methodBodyMatch[1].includes('Promise');
                
                methods.push({
                    name: methodName,
                    params: params.filter(p => p.name),
                    hasReturn: hasReturn
                });
            }
            
            return methods;
        },

        /**
         * Infer type from parameter name
         * @param {string} name - Parameter name
         * @returns {string} Inferred type
         */
        inferType(name) {
            const nameLower = name.toLowerCase();
            
            if (nameLower.includes('id') || nameLower.includes('count') || 
                nameLower.includes('index') || nameLower.includes('size') ||
                nameLower.includes('offset') || nameLower.includes('length')) {
                return 'int32';
            }
            if (nameLower.includes('enabled') || nameLower.includes('is') || 
                nameLower.includes('has') || nameLower.includes('flag')) {
                return 'bool';
            }
            if (nameLower.includes('name') || nameLower.includes('url') || 
                nameLower.includes('path') || nameLower.includes('text') ||
                nameLower.includes('string') || nameLower.includes('message')) {
                return 'string';
            }
            if (nameLower.includes('data') || nameLower.includes('bytes') ||
                nameLower.includes('buffer')) {
                return 'array<uint8>';
            }
            if (nameLower.includes('origin') || nameLower.includes('url')) {
                return 'url.mojom.Url';
            }
            
            return 'any';
        },

        /**
         * Generate a default value for a given type
         * @param {string} type - Mojo type
         * @returns {any} Default value
         */
        getDefaultValue(type) {
            const typeLower = type.toLowerCase();
            
            if (typeLower.includes('int') || typeLower.includes('float') || 
                typeLower.includes('double')) {
                return 0;
            }
            if (typeLower.includes('bool')) {
                return false;
            }
            if (typeLower.includes('string')) {
                return '';
            }
            if (typeLower.includes('array')) {
                return [];
            }
            if (typeLower.includes('map')) {
                return {};
            }
            
            return null;
        },

        /**
         * Get HTML input type for a Mojo type
         * @param {string} type - Mojo type
         * @returns {string} HTML input type
         */
        getInputType(type) {
            const typeLower = type.toLowerCase();
            
            if (typeLower.includes('int') || typeLower.includes('float') || 
                typeLower.includes('double')) {
                return 'number';
            }
            if (typeLower.includes('bool')) {
                return 'checkbox';
            }
            if (typeLower.includes('array') || typeLower.includes('map')) {
                return 'textarea';
            }
            
            return 'text';
        }
    };

    global.MojoParser = MojoParser;
})(typeof window !== 'undefined' ? window : this);
