"use client";

import type React from "react";
import { useState } from "react";
import { Icon, IconButton, Row, Text } from "@once-ui-system/core";

export function CopyForAI() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = async () => {
    if (loading || copied) return;
    setLoading(true);

    try {
      const res = await fetch("/llms.txt");
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy LLM context:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row
      fitWidth
      border="neutral-alpha-medium"
      background="neutral-alpha-weak"
      radius="full"
      padding="4"
      gap="8"
      vertical="center"
      s={{
        fillWidth: true,
        horizontal: "between",
      }}
      style={{
        backdropFilter: "blur(var(--static-space-1))",
        cursor: "pointer",
        transition: "opacity 0.2s ease",
        opacity: loading ? 0.6 : 1,
      }}
      onClick={handleCopy}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCopy();
        }
      }}
      tabIndex={0}
      aria-label="Copy LLM-friendly profile to clipboard"
      // biome-ignore lint/a11y/useSemanticElements: Parent cannot be a semantic <button> because it nests an interactive <IconButton>, and nested buttons are invalid HTML.
      role="button"
    >
      <Row gap="8" vertical="center">
        <Icon
          paddingLeft="12"
          name={copied ? "check" : "sparkles"}
          onBackground={copied ? "brand-weak" : "neutral-weak"}
        />
        <Text
          paddingX="4"
          variant="body-default-s"
          onBackground={copied ? "brand-weak" : "neutral-medium"}
          style={{ whiteSpace: "nowrap", transition: "color 0.2s ease" }}
        >
          {copied ? "Copied!" : "Copy for AI"}
        </Text>
      </Row>
      <IconButton
        icon={copied ? "check" : "clipboardCopy"}
        data-border="rounded"
        variant="secondary"
        size="s"
        aria-hidden="true"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          handleCopy();
        }}
      />
    </Row>
  );
}
