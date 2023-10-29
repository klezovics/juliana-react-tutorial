import * as React from "react";
import {useCopyToClipboard} from "@uidotdev/usehooks";

const randomHash = "juliana is best programmer!"

const checkIcon = "✅";
const copyIcon = "📋";

/*

    3. Custom hooks -> which Juliana writes
    2. Hook libraries -> based on react hooks
    1. BASE -> react hooks.
 */

const Page = () => {
    const [copiedText, copyToClipboard] = useCopyToClipboard();

    const hasCopiedText = Boolean(copiedText);
    return (
        <section>
            <h1>useCopyToClipboard</h1>
            <article>
                <label>Fake API Key</label>
                <pre>
          <code>{randomHash}</code>
                </pre>

                <button
                    disabled={hasCopiedText}
                    onClick={() => copyToClipboard(randomHash)}
                >
                    {hasCopiedText ? checkIcon : copyIcon}
                </button>
            </article>
        </section>
    );
}

export default Page;