component displayName = "Campus App API v1" {
  // transform query results into an array for api consumption
  private array function queryToArray(required query) {
    var result = [];
    for(record in query) {
      result.append(record);
    }
    return result;
  }

  // get all users
  public function getAllUsers() {
    var sql = "SELECT UserID, FirstName, LastName, Password, Email FROM Users";
    var results = queryExecute(sql);
    return { data: queryToArray(results) };
  }

  public function createUser(data) {
    var sql = "
      INSERT INTO Users (FirstName, LastName, Password, Email) 
      VALUES (:FirstName, :LastName, :Password, :Email)";

    var params = { 
        FirstName = { value = data.firstName, cfsqltype = 'cf_sql_varchar' },
        LastName = { value = data.lastName, cfsqltype = 'cf_sql_varchar' },
        Password = { value = data.password, cfsqltype = 'cf_sql_varchar' },
        Email = { value = data.email, cfsqltype = 'cf_sql_varchar' }
      }

    var result = queryExecute(sql, params);

    return { meta: { status: 'success' } };    
  }
}