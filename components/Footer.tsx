import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { Logo } from "./Logo";

const quickLinks = ["About Us", "Services", "Appointment", "Our Doctor", "Contact"];
const usefulLinks = ["Privacy Policy", "Terms and Conditions", "Disclaimer", "Elemets", "Support"];

export function Footer() {
  return (
    <Box component="footer" >
      <Image
        src="/images/Interior/Exterior/TheDentistry_Exterior_FrontWide_BlueHour.png"
        alt="The Dentistry building"
        h={{ base: 200, md: 500 }}
        fit="cover"
      />
      <Container size="xl" py={48}>
        <Box
          p="xl"
          mb={48}
          style={{
            background: "#AC8F6F",
            borderRadius: 16,
            color: "white",
          }}
        >
          <Group justify="space-between" wrap="wrap">
            <Text fz="lg" fw={500}>
              Stay Connected with Dentcare
            </Text>
            <Group gap="sm">
              {[IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandYoutube].map(
                (Icon, i) => (
                  <ActionIcon
                    key={i}
                    size="lg"
                    radius="xl"
                    variant="white"
                    color="tan"
                    aria-label="social"
                  >
                    <Icon size={18} />
                  </ActionIcon>
                )
              )}
            </Group>
          </Group>
        </Box>

        <Grid gutter={48}>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Stack gap="md">
              <Logo />
              <Text c="dimmed" fz="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </Text>
              <Group wrap="nowrap" gap="sm" align="flex-start">
                <IconMapPin size={18} color="var(--mantine-color-tan-6)" />
                <Text fz="sm" c="dimmed">
                  {/* 88 ถนนสุขุมวิท เขตวัฒนา กรุงเทพมหานคร 10110 */}
                  -
                </Text>
              </Group>
              <Group gap="sm">
                <IconMail size={18} color="var(--mantine-color-tan-6)" />
                <Anchor href="mailto:info@thedentistrygroup.com" fz="sm" c="dimmed">
                  info@thedentistrygroup.com
                </Anchor>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, md: 3 }}>
            <Stack gap="sm">
              <Text fw={500} c="tan.7" fz="lg">
                Quick Links
              </Text>
              {quickLinks.map((l) => (
                <Anchor key={l} href="#" c="dimmed" fz="sm">
                  &gt; {l}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, md: 3 }}>
            <Stack gap="sm">
              <Text fw={500} c="tan.7" fz="lg">
                Useful Links
              </Text>
              {usefulLinks.map((l) => (
                <Anchor key={l} href="#" c="dimmed" fz="sm">
                  &gt; {l}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Stack gap="sm">
              <Text fw={500} c="tan.7" fz="lg">
                Make an Appointment
              </Text>
              <Text c="dimmed" fz="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </Text>
              <Button
                leftSection={<IconPhone size={16} />}
                radius="xl"
                color="tan"
                component="a"
                href="tel:0899999999"
                size="md"
              >
                089 999 9999
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>

        <Box mt={48} pt="md" style={{ borderTop: "1px solid #f1e7d6" }}>
          <Text ta="center" c="dimmed" fz="xs">
            Copyright © 2026. All Right Reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
