package Chainin;

import static io.restassured.RestAssured.given;

import org.json.JSONObject;
import org.testng.annotations.Test;

import com.github.javafaker.Faker;
import org.testng.ITestContext;

public class updateuser 

{
	Faker faker = new Faker();
    String tocken="b60f748056a4527a35be67f86ce10f02b4929ac9122ef418434eae410a020023" ;
    int userid;
    String BaseURL="https://gorest.co.in/public/v2/users";
	
	
	@Test
	
		void updateuser(ITestContext context)
		
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
				.pathParam("userid",(Integer)context.getAttribute("userid") )
			.when()
		           .put(BaseURL+"/{userid}")
	 			
			.then()
				.statusCode(200)
				.log().body();
				
		}
}
