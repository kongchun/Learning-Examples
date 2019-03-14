package com.estel.webpush.controller;

import com.estel.webpush.util.KeyUtils;
import nl.martijndwars.webpush.Notification;
import nl.martijndwars.webpush.PushService;
import nl.martijndwars.webpush.Subscription;
import nl.martijndwars.webpush.Utils;
import org.apache.http.HttpResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/")
public class SubscribeController {

	@RequestMapping("/getKey")
	@ResponseBody
	public byte[] getKey(){
		return Utils.encode(KeyUtils.publicKey);
	}

	@RequestMapping("/push")
	@ResponseBody
	public Integer push(@RequestBody Subscription subscription){
		try {
			System.out.println("Push Triggered.");
			Notification notification = new Notification(subscription,"From Push Server!");
			PushService pushService = new PushService();
			//pushService.setPublicKey(Utils.loadPublicKey("BGl4xCE-w3XVGeX5F2fSvNTTuyMT-cfPf9qYf1b8tJc9mO3Y2P9FcEH7JVzBlcolwJ2Vgg7JNwvfWyzsj-xBe90="));
			//pushService.setPrivateKey(Utils.loadPrivateKey("V6pWDEb6vldP8TvSo25G2uco2A9AbP92-MakZdvbnFk="));
			pushService.setPublicKey(KeyUtils.publicKey);
			pushService.setPrivateKey(KeyUtils.privateKey);
			//Thread.sleep(5000);
			HttpResponse httpResponse = pushService.send(notification);
			int statusCode = httpResponse.getStatusLine().getStatusCode();
			System.out.println("Status Code: " + statusCode);
			return statusCode;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -1;
	}

	@RequestMapping("/sync")
	@ResponseBody
	public String sync(){
		System.out.println("Sync Triggered.");
		return "Sync From Server";
	}
}
