"use client";

import { Column, Heading, Text, Button, Row, Line } from "@once-ui-system/core";
import { useRouter } from "next/navigation";

export default function SecretsPage() {
  const router = useRouter();

  const riddles = [
    {
      id: "1",
      title: "Riddle I: The Brew Master",
      clue: "I am a cup, not a bean. Query me where coffee should have been.",
      hint: "Try appending /coffee or /teapot to the URL.",
    },
    {
      id: "2",
      title: "Riddle II: The Retro Gamer",
      clue: "The gaming code of '86 — type it out to see green CRT tricks.",
      hint: "Focus the page and type the Konami code: Up, Up, Down, Down, Left, Right, Left, Right, B, A.",
    },
    {
      id: "3",
      title: "Riddle III: The Builder's Gaze",
      clue: "Click the face of the builder to find why bugs inhabit digital space.",
      hint: "Go to the About page and click on Ashmit's main profile picture.",
    },
    {
      id: "4",
      title: "Riddle IV: The System Pulse",
      clue: "Under the copyright, find the heartbeat. Click it to overheat the server.",
      hint: "Find the server 'DB Ping' counter in the footer and click it multiple times.",
    },
  ];

  return (
    <Column maxWidth="m" gap="xl" paddingY="40" paddingX="16" horizontal="center" style={{ minHeight: "85vh" }}>
      <Column gap="m" maxWidth="s" horizontal="center" align="center">
        <Heading variant="display-strong-l" align="center" style={{ letterSpacing: "-0.03em" }}>
          🔓 The Secret Chamber
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          Nice job hacking your way in! You&apos;ve unlocked the secrets registry. Solve these riddles to trigger the portfolio&apos;s hidden easter eggs.
        </Text>
      </Column>

      <Line background="neutral-alpha-medium" fillWidth />

      <Column fillWidth gap="l">
        {riddles.map((riddle) => (
          <Column
            key={riddle.id}
            padding="24"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            gap="12"
          >
            <Row horizontal="between" vertical="center" fillWidth>
              <Text variant="heading-strong-m" onBackground="neutral-strong">
                {riddle.title}
              </Text>
              <Text variant="body-default-xs" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                Active Egg #{riddle.id}
              </Text>
            </Row>
            
            <Text variant="body-default-m" onBackground="neutral-strong" style={{ letterSpacing: "-0.01em" }}>
              &ldquo;{riddle.clue}&rdquo;
            </Text>

            <Line background="neutral-alpha-weak" fillWidth />

            <Row vertical="center" gap="8">
              <Text variant="label-strong-s" onBackground="brand-medium">
                Hint:
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {riddle.hint}
              </Text>
            </Row>
          </Column>
        ))}
      </Column>

      <Row gap="12" horizontal="center" marginTop="l">
        <Button variant="secondary" data-border="rounded" size="m" onClick={() => router.push("/")}>
          Return to Home
        </Button>
      </Row>
    </Column>
  );
}
