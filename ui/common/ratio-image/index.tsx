"use client"
import { addImageError, listImageError } from "@/services/helper";
import { useState } from "react";

const AspectRatioImage = ({ description, ratio, className, src, ...rest }: any) => {
    const [srcDefault, setSrc] = useState("");
    const imageDefault = "/"
    const notfound = listImageError.find((element: any) => element === src)
    return (
        <div className={className}>
            <figure className="w-full overflow-hidden relative bg-gradient-gray" style={{ paddingTop: `calc(${ratio} * 100%)` }}>
                <img
                    onError={() => { setSrc(imageDefault); addImageError(src) }}
                    src={notfound ? srcDefault : (srcDefault || src || imageDefault)} {...rest} className={"w-full- h-full absolute top-0 left-0 object-cover"} />
                {description && <figcaption>{description}</figcaption>}
            </figure>
        </div>
    );
};

export default AspectRatioImage;
