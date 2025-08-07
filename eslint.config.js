export default [
    {
        files : ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2024,        
            sourceType: "module", 
        }, 
        rules:{
            semi: ['error', 'always'],
            quotes: ['error', 'single']
        }
    }
]
