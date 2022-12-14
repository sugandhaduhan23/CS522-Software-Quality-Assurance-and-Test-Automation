package TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Feature/target.feature",glue={"StepDefinition"}, tags={"@Test1, @Test2, @Test3, @Test4, @Test5, @Test6"})
public class JUnitRunner
{

}