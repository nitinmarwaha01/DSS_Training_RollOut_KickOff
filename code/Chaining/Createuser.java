package Chainin;

import static io.restassured.RestAssured.given;

import org.json.JSONObject;
import org.testng.ITestContext;
import org.testng.annotations.Test;

import com.github.javafaker.Faker;
@Test
public class Createuser 
{
	Faker faker = new Faker();
    String tocken="b60f748056a4527a35be67f86ce10f02b4929ac9122ef418434eae410a020023" ;
    public static int userid;
    String BaseURL="https://gorest.co.in/public/v2/users";
    
	@Test
	(priority=1)
	void createuser(ITestContext context)
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
		context.setAttribute("userid",userid);
		
		
	}
	
}
