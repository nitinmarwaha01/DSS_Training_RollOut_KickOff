package Chainin;

import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import org.json.JSONObject;

import com.github.javafaker.Faker;

public class ConnectAPI 

{
     
	
	Faker faker = new Faker();
    String tocken="b60f748056a4527a35be67f86ce10f02b4929ac9122ef418434eae410a020023" ;
    int userid;
    String BaseURL="https://gorest.co.in/public/v2/users";
    
	@Test
	(priority=1)
	void createuser()
	{
		JSONObject requestbody= new JSONObject();
		requestbody.put("name",faker.name().firstName());
		requestbody.put("email",faker.internet().emailAddress());
		requestbody.put("gender","female");
		requestbody.put("status","active");
		
		userid=given()
			.headers("Authorization","Bearer " +tocken)
			.contentType("application/json")
			.body(requestbody.toString())
		.when()
			.post(BaseURL)
 			
		.then()
			.statusCode(201)
			.log().body()
			.extract().response().jsonPath().getInt("id");
		
		
	}
	
	
	@Test
	(priority=2)
	void getuser()
	
	{
		given()
		.headers("Authorization","Bearer " +tocken)
	    .pathParam("userid",userid )
		.when()
           .get(BaseURL+"/{userid}")
		.then()
		.statusCode(200)
		.log().body();
	}
	
	@Test
	(priority=3)
		void updateuser()
		
		{
			 JSONObject requestbody= new JSONObject();
			requestbody.put("name",faker.name().firstName());
			requestbody.put("email",faker.internet().emailAddress());
			requestbody.put("gender","male");
			requestbody.put("status","inactive");
			
			given()
				.headers("Authorization","Bearer " +tocken)
				.contentType("application/json")
				.body(requestbody.toString())
				.pathParam("userid",userid )
			.when()
		           .put(BaseURL+"/{userid}")
	 			
			.then()
				.statusCode(200)
				.log().body();
				
		}

	@Test
	(priority=4)
	void deleteuser()
	
	{
		given()
			.headers("Authorization","Bearer " +tocken)
			.pathParam("userid",userid )
		.when()
	           .delete(BaseURL+"/{userid}")	
	    .then()
	    	.statusCode(204);
	           
	}
	
}
