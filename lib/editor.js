class TextEditor {
    constructor(editorId, options = {}) {
      this.editor = document.getElementById(editorId);
      this.init(options);
    }

    init(options) {
        // Configurações iniciais
        if (options.placeholder) {
            editor.setAttribute("data-placeholder", options.placeholder);
            editor.addEventListener("focus", () => {
              if (editor.textContent === "") {
                editor.removeAttribute("data-placeholder");
              }
            });
            editor.addEventListener("blur", () => {
              if (editor.textContent === "") {
                editor.setAttribute("data-placeholder", options.placeholder);
              }
            });
        }

         // Adiciona eventos da barra de ferramentas
        const toolbarButtons = document.querySelectorAll("#toolbar button, #toolbar input, #toolbar select");
        toolbarButtons.forEach((element) => {

            const command = element.getAttribute("data-command");

            if (element.tagName === "SELECT") {
                // Para os dropdowns, usamos o evento 'change'
                element.addEventListener("change", () => {
                  const value = element.value;
                  document.execCommand(command, false, value);
                });
            } else if (element.type === "color") {
                // Para os inputs de cor, usamos o evento 'input'
                element.addEventListener("input", () => {
                  const color = element.value;
                  document.execCommand(command, false, color);
                });
            } else {
                 // Para os botões, usamos o clique
                 element.addEventListener("click", () => {
                    document.execCommand(command, false, null);
                });
            }
        });
    }

    // Método para recuperar o conteúdo
    getContent() {
        return this.editor.innerHTML;
    }

    // Método para definir o conteúdo
    setContent(content) {
        this.editor.innerHTML = content;
    }
}

// Exporta como módulo
export default TextEditor;