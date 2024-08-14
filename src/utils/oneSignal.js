import OneSignal from "react-onesignal";

export default async function runOneSignal() {
  await OneSignal.init({
    appId: "f1e94926-be75-4fc8-b2e6-9baa8df89caf",
    allowLocalhostAsSecureOrigin: true,
  });
  console.log("OneSignal initialized", OneSignal);
  OneSignal.Slidedown.promptPush();
}
