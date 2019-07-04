package com.estel.webpush;

import com.estel.webpush.util.KeyUtils;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.security.Security;

@Component
public class CustomCommandLineRunner implements CommandLineRunner {

	@Override
	public void run(String... args) throws Exception {
		Security.addProvider(new BouncyCastleProvider());
		KeyUtils.generateKeys();
	}
}
