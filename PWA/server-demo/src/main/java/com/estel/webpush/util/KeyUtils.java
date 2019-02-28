package com.estel.webpush.util;

import org.bouncycastle.jce.ECNamedCurveTable;
import org.bouncycastle.jce.interfaces.ECPrivateKey;
import org.bouncycastle.jce.interfaces.ECPublicKey;
import org.bouncycastle.jce.spec.ECNamedCurveParameterSpec;

import java.security.KeyPair;
import java.security.KeyPairGenerator;

import static nl.martijndwars.webpush.Utils.ALGORITHM;
import static nl.martijndwars.webpush.Utils.CURVE;
import static org.bouncycastle.jce.provider.BouncyCastleProvider.PROVIDER_NAME;

public class KeyUtils {

	public static ECPublicKey publicKey = null;
	public static ECPrivateKey privateKey = null;

	public static void generateKeys() throws Exception{
		ECNamedCurveParameterSpec parameterSpec = ECNamedCurveTable.getParameterSpec(CURVE);
		KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance(ALGORITHM, PROVIDER_NAME);
		keyPairGenerator.initialize(parameterSpec);
		KeyPair keyPair = keyPairGenerator.generateKeyPair();
		KeyUtils.publicKey = (ECPublicKey) keyPair.getPublic();
		KeyUtils.privateKey = (ECPrivateKey) keyPair.getPrivate();
	}
}
