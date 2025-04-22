"use client";

import { Layouts } from "@/components/layouts";
import { DEditor } from "@/components/dynamics/d-editor";
import { JSONContent } from "@tiptap/react";

const Page = () => {
  const handleOnChange = (richText: string | JSONContent) => {
    console.log(richText);
  };
  return (
    <Layouts.Container>
      <Layouts.Section>
        <DEditor.Editor description={HTMLFile} onChange={handleOnChange} />
      </Layouts.Section>
    </Layouts.Container>
  );
};

export default Page;

const HTMLFile = `
<h1 style="text-align: center"># actionsboard landing and admin app</h1><p style="text-align: center">--- title: "Landing Page Copy" description: "First know who you're targeting. Identify your target audience and understand their needs." icon: "list-details" --- # Landing Page Copy. The inability to write. Ev<mark data-color="lightblue" style="background-color: lightblue; color: inherit">eryone has</mark> been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehender</p><p style="text-align: center"></p><h3 style="text-align: center">it elit laborum. Aliqua id fugiat nostrud irure</h3><p style="text-align: center">ex duis ea quis id quis ad et. Sunt qui esse pariat<mark data-color="yellow" style="background-color: yellow; color: inherit">ur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt. #### Step 1: Write Higher Converting Posts Everyone has be</mark>en there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate anyone exercitation incididunt aliquip deserunt re<strong>prehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt. #### Step 2: Start creating powerful content, for blog post Everyone has been there. Even the <mark data-color="lightgreen" style="background-color: lightgreen; color: inherit">most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco</mark></strong></p><p style="text-align: center"></p><p style="text-align: center">cillum dolor. Voluptate anyone exercitation incididunt a<mark data-color="yellow" style="background-color: yellow; color: inherit">liquip deserunt reprehenderit elit laborum. #### Step 2: Start creating powerful content, for blog post Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dol</mark>or. Voluptate anyone exercitation incididunt aliquip deserunt reprehenderit elit laborum. Fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse paria</p><p style="text-align: center"></p><p style="text-align: center">tur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt. GenAI has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna.</p>`;
