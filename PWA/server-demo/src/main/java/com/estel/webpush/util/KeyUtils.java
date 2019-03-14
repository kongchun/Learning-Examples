package com.estel.webpush.util;

import nl.martijndwars.webpush.Utils;
import org.bouncycastle.jce.ECNamedCurveTable;
import org.bouncycastle.jce.interfaces.ECPrivateKey;
import org.bouncycastle.jce.interfaces.ECPublicKey;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.jce.spec.ECNamedCurveParameterSpec;

import java.security.KeyPair;
import java.security.KeyPairGenerator;

public class KeyUtils {

	public static ECPublicKey publicKey = null;
	public static ECPrivateKey privateKey = null;

	public static void generateKeys() throws Exception{
		ECNamedCurveParameterSpec parameterSpec = ECNamedCurveTable.getParameterSpec(Utils.CURVE);
		KeyPairGenerator keyPairGenerator = KeyPairGenerator
				.getInstance(Utils.ALGORITHM, BouncyCastleProvider.PROVIDER_NAME);
		keyPairGenerator.initialize(parameterSpec);
		KeyPair keyPair = keyPairGenerator.generateKeyPair();
		KeyUtils.publicKey = (ECPublicKey) keyPair.getPublic();
		KeyUtils.privateKey = (ECPrivateKey) keyPair.getPrivate();
	}
}
