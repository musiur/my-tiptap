import { Typography } from "@/components/typography";
import { Container } from "../container";
import { Flex } from "../flex";
import { Button } from "@/components/ui/button";

export const Root = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="pt-2">
        <Container className="border rounded-xl backdrop-blur-2xl bg-white/50">
          <Flex className="py-2 items-center justify-between">
            <Typography.P className="font-semibold text-lg md:text-2xl">
              TIPTAP
            </Typography.P>
            <div>
              <Button>Get started</Button>
            </div>
          </Flex>
        </Container>
      </nav>
    </header>
  );
};
