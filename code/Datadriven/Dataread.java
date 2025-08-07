package Datatest;

import static io.restassured.RestAssured.given;

import org.json.JSONObject;
import org.testng.annotations.Test;

public class Dataread 
{
	    String tocken="b60f748056a4527a35be67f86ce10f02b4929ac9122ef418434eae410a020023" ;
	    public static int userid;
	    String BaseURL="https://gorest.co.in/public/v2/users";
	
	    @Test
	    (dataProvider="datawithexcel", dataProviderClass=Dataproviders.class)
	    public void createuserwithexcel(String name, String email, String gender,String status)
	    {
	    	createrecord(name,email,gender,status);
	    }
	
	
	
	    
  void createrecord(String name, String email, String gender,String status)
		{
			JSONObject requestbody= new JSONObject();
			requestbody.put("name","name");
			requestbody.put("email","email");
			requestbody.put("gender","gender");
			requestbody.put("status","status");
			
			userid=given()
				.headers("Authorization","Bearer " +tocken)
				.contentType("application/json")
				.body(requestbody.toString())
				.log().body()
			.when()
				.post(BaseURL)
	 			
			.then()
				.statusCode(201)
				.log().body()
				.extract().response().jsonPath().getInt("id");
			
			System.out.println(userid);
			
			
			given()
			.headers("Authorization","Bearer " +tocken)
			.pathParam("userid","userid" )
		.when()
	           .delete(BaseURL+"/{userid}")	
	    .then()
	    	.statusCode(204);
			
		}
}
