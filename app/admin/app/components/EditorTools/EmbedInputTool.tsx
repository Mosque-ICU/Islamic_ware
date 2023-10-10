import { render, unmountComponentAtNode } from "react-dom";
import EmbedInput from "../EmbedInput/EmbedInput";
import { setNewRootId } from "@/app/_helpers/web/formatters";

export class EmbedInputTool {
  api: any;
  readOnly: any;
  data: any;
  CSS: { wrapper: string };
  nodes: { holder: null };
  config: any;
  root: any;
  editor: any;
  constructor({ data, config, api, readOnly, editor }) {
    this.api = api;
    this.readOnly = readOnly;
    this.data = data;
    this.config = config;
    this.editor;
    this.root = null;

    this.CSS = {
      wrapper: "walkthrough-timeline",
    };

    this.nodes = {
      holder: null,
    };
  }

  static get toolbox() {
    return {
      icon: ` <img
          width="16px"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACbklEQVR4nO2ay2sUQRCHP4NXBUVE41kTc1MwXsxFfBz9CxSJxosePASDGnBPKiJefFx9YS6C4uMkmqME48E/QDwIRhSNSgRfmJWCWijarJnp3fROm/qgYJid6q36TU/XTm2D4ziO4ziO4zRjOTAKPAe+AvWKm8Q4CZzU2FtiKzBVgaRi7Q3QH5t8L/C5Akm0ap+AnhgBxs0gH4EDwFqqj8R4EJg28T8uO0ifcf4FbCE/NgM/TR6lZsEh43iffHlo8pBZUZgR43iKfKmZPI6VcdwAvFRbT778L3k4Tmq6gL1qcrzo8thnVk9xzpXoPGrGUY5zJTqP2jyOUlPfAucr8IiMaJkbTinAO/P5TWAp6RHhL5o4ZlIKcC5443oErCIdK4B7QQxXUwqwBLgQBPAa2M7CMwC8Cr77WpNZuGACNDgB/DbXzgI3gHW0n269y7PB953RG0InBBB2Ax+CO/IduBLbiAiQMS4D3+ZodOyZxzeJAMIaYKxJR2ZCV+hNBStGl77LD6vvXGPeLjjLkgnQYAfw9B/tqS/asLylK/hZtUt6blKvaeYvguyiOMkFsELcAX60oacnY9wFdlKejgnQYKX2Esf0h1PRpKd0RgzqGLF0XICQ1VrG9gNH9Fec2GE9N6DXtIvKCZAaFwCfAfgjgK8B+CKIVwG8DJKiflYML4N4GcTLIBGP8qiZOqdZhI/AkHF8QL5cN3kcLeO4MdgiE73TqoP0Bdv65FW7FE+M87RuMZHObNXp1ljfm/hfxPyD1aOd13rmNqNN1ij6dbNhPVOT2LfRIsuA48AzVTOHOz6hrTaJ3XEcx3Ecx3H4mz/MHWk99rqY9AAAAABJRU5ErkJggg=="
        ></img>`,
      title: "Embed",
    };
  }

  static get isReadOnlySupported() {
    return true;
  }

  render() {
    const rootNode = document.createElement("div");
    rootNode.setAttribute("class", this.CSS.wrapper);
    //@ts-expect-error
    this.nodes.holder = rootNode;

    if (!this.data.id) {
      this.data = {
        id: "embedInput_" + Date.now(),
        url: "",
        sizes: { height: 400, width: 700 },
        type: "website",
      };
    }

    const onDataChange = (url, sizes, type) => {
      if (!url) return;
      const s = { height: sizes?.height || 400, width: sizes?.width || 400 };
      this.data = { ...this.data, url, sizes: s, type };
    };
    this.root = rootNode;

    setNewRootId(this.root);

    render(
      <EmbedInput readOnly={this.readOnly} dataUrl={this.data.url} dataSizes={this.data.sizes} type={this.data.type} onDataChange={onDataChange} />,
      this.root
    );

    return this.nodes.holder;
  }

  destroy() {
    unmountComponentAtNode(this.root);

    console.log("destroy");
  }

  save() {
    return this.data;
  }
}
