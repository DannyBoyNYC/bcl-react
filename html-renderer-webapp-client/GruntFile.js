module.exports = function(grunt) {
	var webpackConfig = require("./webpack.config.js");
	var srcDir = 'src/main/webapp';
	var outputDir = 'target/html-renderer';
	
	grunt.initConfig({
		clean: [outputDir],
		copy: {
			  main: {
			    files: [
			        {expand: true, cwd: srcDir + '/svg', src: ['**'], dest: outputDir +'/svg/', filter: 'isFile'},
			        {expand: true, cwd: srcDir + '/xsl', src: ['**'], dest: outputDir +'/xsl/', filter: 'isFile'},
			        {expand: true, cwd: srcDir + '/css', src: ['**'], dest: outputDir +'/css/', filter: 'isFile'},
			        {expand: true, cwd: srcDir + '/img', src: ['**'], dest: outputDir +'/img/', filter: 'isFile'}
			    ]
			  }
		},		
		compass: {
			dist: {
				options: {
					sassDir:  srcDir + '/scss',
					cssDir: outputDir + '/css'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			}
		},
		webpack: {
        	options:webpackConfig,
        	build: {}
	    }
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks("grunt-webpack");
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default',['clean','copy','webpack']);
	
	grunt.registerTask('dev',['watch']);
	
}