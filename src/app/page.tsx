import { Tiptap } from "@/components/tiptap";
import { Layouts } from "@/components/layouts";

const Page = () => {
  return (
    <Layouts.Container>
      <Layouts.Section>
        <Tiptap.Root />
      </Layouts.Section>
    </Layouts.Container>
  );
};

export default Page;
