import * as React from "react";
import {useCopyToClipboard} from "@uidotdev/usehooks";

const randomHash = crypto.randomUUID();

const checkIcon = "✅";
const copyIcon = "📋";

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
                    className="link"
                    onClick={() => copyToClipboard(randomHash)}
                >
                    {hasCopiedText ? checkIcon : copyIcon}
                </button>
            </article>
        </section>
    );
}

export default Page;