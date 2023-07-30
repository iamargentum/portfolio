import * as React from "react";
import * as styles from "./Main.module.css";

export function Main() {

    const im_ref = React.useRef();
    const hello_ref = React.useRef();
    const world_ref = React.useRef();
    const rajat_ref = React.useRef();

    const send_word_through_top = (ref) => {
        if(ref.current && ref.current.style) {
            let current_top = parseInt(ref.current.style.top?.slice(0, -2));

            if(!current_top || isNaN(current_top)) {
                current_top = 0;
            }

            ref.current.style.top = (current_top - 0.2).toString() + "rem";
            return;
        }

        return;
    }

    const send_word_through_bottom = (ref) => {
        if(ref.current && ref.current.style) {
            let current_bottom = parseInt(ref.current.style.bottom?.slice(0, -2));

            if(!current_bottom || isNaN(current_bottom)) {
                current_bottom = 0;
            }

            ref.current.style.bottom = (current_bottom - 0.2).toString() + "rem";
            return;
        }

        return;
    }

    React.useEffect(() => {
        document.addEventListener("scroll", (e) => {
            
            send_word_through_top(hello_ref);
            send_word_through_bottom(world_ref);
            send_word_through_top(rajat_ref);
            send_word_through_bottom(im_ref);
        })
    }, [])

    return (
        <div className={ styles.main_container }>
            <div className={ styles.main_text_container }>
                <div className={ styles.word_container }>
                    <div className={ styles.word_hello } ref={ hello_ref }>hello</div>
                </div>
                <div className={ styles.word_container }>
                    <div className={ styles.word_world } ref={ world_ref }>world!</div>
                </div>
                <div className={ styles.word_container }>
                    <div className={ styles.word_im } ref={ im_ref }>i'm</div>
                </div>
                <div className={ styles.word_container }>
                    <div className={ styles.word_rajat } ref={ rajat_ref }>rajat</div>
                </div>
            </div>
        </div>
    )
}