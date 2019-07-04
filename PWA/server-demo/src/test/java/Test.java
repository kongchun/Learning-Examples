import nl.martijndwars.webpush.cli.commands.GenerateKeyCommand;
import nl.martijndwars.webpush.cli.handlers.GenerateKeyHandler;

public class Test {

	public static void main(String[] args) {
		try {
			new GenerateKeyHandler(new GenerateKeyCommand()).run();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
