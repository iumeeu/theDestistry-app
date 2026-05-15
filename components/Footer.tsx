"use client";

import {
  ActionIcon,
  Anchor,
  Box,
  Container,
  Grid,
  Group,
  List,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <Box
      component="footer"
      style={{ background: "var(--mantine-color-white)" }}
    >
      <Container size="xl" py={48}>
        <Box
          p="xl"
          mb={48}
          style={{
            background: "var(--mantine-color-beige-6)",
            borderRadius: 16,
            color: "var(--mantine-color-darkGrey-6)",
          }}
        >
          <Group justify="space-between" wrap="wrap">
            <Text fz="lg" fw={500} c="darkGrey.6">
              {t.footer.stayConnected}
            </Text>
            <Group gap="sm">
              {[
                IconBrandFacebook,
                IconBrandTwitter,
                IconBrandInstagram,
                IconBrandYoutube,
              ].map((Icon, i) => (
                <ActionIcon
                  key={i}
                  size="lg"
                  radius="xl"
                  variant="white"
                  color="darkGrey"
                  aria-label="social"
                >
                  <Icon size={18} />
                </ActionIcon>
              ))}
            </Group>
          </Group>
        </Box>

        <Grid gutter={48}>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="md">
              <Logo />
              <Text c="darkGrey.6" fz="sm">
                {t.footer.companyDesc}
              </Text>
              <Text fz="sm" c="darkGrey.6">
                {t.footer.address}
              </Text>
              <Group gap="sm">
                <IconMail
                  size={18}
                  color="var(--mantine-color-darkGrey-6)"
                />
                <Anchor
                  href="mailto:info@thedentistrygroup.com"
                  fz="sm"
                  c="darkGrey.6"
                >
                  info@thedentistrygroup.com
                </Anchor>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="sm">
              <Text fw={600} c="darkGrey.6" fz="lg">
                {t.footer.quickLinksTitle}
              </Text>
              <List
                listStyleType="disc"
                spacing={6}
                c="darkGrey.6"
                fz="sm"
                styles={{
                  itemWrapper: { display: "inline" },
                }}
              >
                {t.footer.quickLinks.map((l) => (
                  <List.Item key={l}>
                    <Anchor href="#" c="darkGrey.6" fz="sm">
                      {l}
                    </Anchor>
                  </List.Item>
                ))}
              </List>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
