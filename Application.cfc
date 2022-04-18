component
{
	// local development setup	
	this.customtagpaths = expandPath('./customTags');
	
	setting enablecfoutputonly = false;
	
	this.name = "campusApp";
	
	this.clientManagement = true;
	this.sessionManagement = true;
	this.setClientCookie = true;
	this.sessionTimeout = createTimeSpan(0, 0, 30, 0);
	this.applicationTimeout = createTimeSpan(0, 0, 30, 0);
	
	// database connection
	variables.dbPath = expandPath("/resources/database/Derby/");
	this.datasource = "campusdb";
	this.datasources = {
		campusdb = {
			url = "jdbc:derby:#variables.dbPath#;create=true;MaxPooledStatements=300",
			driver = "Apache Derby Embedded"
		}
	}
	
	public boolean function onApplicationStart() {

		return true;
	}

	public void function onSessionStart() {
		session.created = now();
		session.isLoggedIn = false;
	}

	public void function onRequest(required string targetPage) {
		if ( !DirectoryExists( variables.dbPath ) ) 
		{
      include "/resources/database/buildDB.cfm";
		}
		
		include arguments.targetPage;
	}
}