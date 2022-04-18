<cfscript>

	variables.dbPath = expandPath("/resources/database/Derby/");

	this.name = "CampusApp";
	this.applicationTimeout = createTimeSpan(0,2,0,0); //2h
	this.sessionManagement = true;
	this.sessionTimeout = createTimeSpan(0,0,45,0); //45 min

	this.customtagpaths = expandPath('./myCustomTags');

	this.datasource = "CFTrainingDSN";

	this.datasources = {
		CFTrainingDSN = {
			url = "jdbc:derby:#variables.dbPath#;create=true;MaxPooledStatements=300", 
			driver = "Apache Derby Embedded"
		}
	};

	// public void function onError(required error) {
	// 	writeOutput("<p>AN ERROR HAS OCCURRED...#error.message#</p>");
	// }
</cfscript>
 