"use client";

import { Layouts } from "@/components/layouts";
import { DEditor } from "@/components/dynamics/d-editor";

const Page = () => {
  const handleOnChange = (richText: string) => {
    console.log(richText);
  };
  return (
    <Layouts.Container>
      <Layouts.Section>
        <DEditor.Editor description={"Hello there! My name is Musiur Alam Opu. And you?"} onChange={handleOnChange} />
      </Layouts.Section>
    </Layouts.Container>
  );
};

export default Page;
