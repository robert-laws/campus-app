<cfscript>
  API = new API();

  function matchAgainstPath(method, path) {

  }

  function handleRequest() {
    if(!isDefined('URL.method')) {
      cfheader(statuscode = 405, statustext = "missing method query parameter");
      return { error: "missing method query parameter" };
    }

    var method = URL.method;
    var req = getHTTPRequestData();
    
    var httpMethod = req.method;
    var headers = req.headers;
    var body = deserializeJSON(len(req.content) ? req.content : "{}");

    if(httpMethod == 'GET' && method == 'users') {      
      return API.getAllUsers()
    }

    if(httpMethod == 'POST' && method == 'users') {
      return API.createUser(body)
    }
  }

  try {
    result = handleRequest();
    json = serializeJSON(result, 'struct');
    cfheader(name = "Content-Type", value = "application/json");
    cfheader(name = "Access-Control-Allow-Origin", value="*");
    cfheader(name = "Access-Control-Allow-Methods", value="GET, POST, OPTIONS, DELETE, PUT");
    cfheader(name = "Access-Control-Allow-Headers", value="Origin, Content-Type, Accept, Authorization, X-Request-With, X-CLIENT-ID, X-CLIENT-SECRET");
    cfheader(name = "Access-Control-Allow-Credentials", value="true");
    writeOutput(json);
  } catch(any err) {
    writeDump(err);
  }
</cfscript>