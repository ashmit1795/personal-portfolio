"use client";

import { Column, Heading, Text, Button, Row } from "@once-ui-system/core";
import { useRouter } from "next/navigation";

export default function TeapotPage() {
  const router = useRouter();

  return (
    <Column maxWidth="s" gap="xl" paddingY="40" horizontal="center" style={{ minHeight: "80vh" }}>
      <Heading variant="display-strong-xl" align="center" style={{ letterSpacing: "-0.05em" }}>
        418
      </Heading>
      <Text variant="heading-strong-m" onBackground="neutral-strong" align="center">
        HTTP 418: I'm a Teapot
      </Text>
      
      {/* ASCII Teapot */}
      <Text variant="code-default-m" style={{ whiteSpace: "pre", color: "var(--brand-solid)" }} align="center">
{`             ;
            ;  ;
            ;   ;
        ,---.   ;
       /     \\  ;
      | () () | ;
       \\  ^  / ;
      __\`---'_/___
     /            \\
    /  I'M A       \\
   |   TEAPOT       |
    \\  (RFC 2324)  /
     \`------------'`}
      </Text>

      <Text variant="body-default-m" onBackground="neutral-weak" align="center" wrap="balance">
        The requested server refuses to brew coffee because it is, permanently, a teapot. 
        This is a reference to the famous Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0) 
        developed as an IETF April Fools' Joke in 1998.
      </Text>

      <Row gap="12" horizontal="center">
        <Button variant="secondary" data-border="rounded" size="m" onClick={() => router.push("/")}>
          Return to Home
        </Button>
        <Button variant="primary" data-border="rounded" size="m" onClick={() => window.open("https://tools.ietf.org/html/rfc2324", "_blank")}>
          Read RFC 2324
        </Button>
      </Row>
    </Column>
  );
}
