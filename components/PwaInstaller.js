import { useEffect, useState } from "react";
import { useUserStore } from "../stores/user";

const PwaInstaller = () => {
    const deferredPwaInstall = useUserStore((state) => state.deferred_pwa_install);
    const [showInstallInstructions, setShowInstallInstructions] = useState(false);

    useEffect(() => {
    }, []);

    const handleShowInstallPwaPrompt = async () => {
        console.log("PWA INSTALL PROMPT>>>>", deferredPwaInstall);

        if (deferredPwaInstall) {
            try {
                await deferredPwaInstall.prompt();
                const user_install_choice = await deferredPwaInstall.userChoice;
                console.log("User install choice: ", user_install_choice);
            } catch (err) {
                console.log("Error with showing install PWA prompt: ", err);
            }
        } else {
            setShowInstallInstructions(true);
        }
    };

    return (
        <div>
            <button onClick={handleShowInstallPwaPrompt}>Install PWA</button>
            {showInstallInstructions && <p>Please follow the instructions to install the PWA.</p>}
        </div>
    );
};

export default PwaInstaller;
