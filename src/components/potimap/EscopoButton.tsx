import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";

type EscopoButtonProps = {
  getter: Boolean;
  setter: Dispatch<SetStateAction<boolean>>;
  scope: string;
};

const EscopoButton: React.FC<EscopoButtonProps> = ({ getter, setter, scope }) => {
  
    function activateScope() {
        if (getter) {
            setter(false);
        } else {
            setter(true);
        }
    }

    return (
        <div>
            <Button variant="outline" size="lg" className="mb-4" onClick={activateScope}>
                {scope}
            </Button>   
        </div>
    );
};

export default EscopoButton;