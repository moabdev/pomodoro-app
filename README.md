# Pomodoro Timer App

## 📋 Sobre o Projeto

Este é um aplicativo de **Pomodoro Timer** desenvolvido com **React** e **TypeScript**. Ele utiliza o método Pomodoro para ajudar a aumentar a produtividade através de ciclos de trabalho e descanso. A cada ciclo completado, há a opção de um descanso curto ou longo para revitalizar sua energia.

## 🚀 Funcionalidades

- **Temporizador de Trabalho e Descanso**:
  - 25 minutos para foco (configurável).
  - 5 minutos de descanso curto (configurável).
  - 15 minutos de descanso longo após 4 ciclos (configurável).

- **Interações com o Usuário**:
  - Botão de **Iniciar/Pausar** o timer.
  - Alternância manual entre **Trabalho** e **Descanso**.
  - Controle de som para notificações.

- **Exibição de Estatísticas**:
  - Total de **ciclos completados**.
  - Tempo total de **trabalho realizado**.
  - Número de **Pomodoros concluídos**.

## 🛠️ Tecnologias Utilizadas

- **React** com **TypeScript**
- **Tailwind CSS** para estilização
- **Lucide Icons** para ícones intuitivos
- **Vite** como bundler
- Hooks personalizados para **controle de áudio** e **temporização**

## 🧩 Componentes Principais

### `App.tsx`
O ponto de entrada do aplicativo, responsável por renderizar o componente `PomodoroTimer`.

```tsx
import { PomodoroTimer } from "./components/PomodoroTimer";

const App: React.FC = () => {
  return (
    <div className="container flex justify-center items-center min-h-screen py-8">
      <PomodoroTimer
        pomodoroTime={1500} // 25 minutos
        shortRestTime={300} // 5 minutos
        longRestTime={900}  // 15 minutos
        cycles={4}          // 4 ciclos antes de um descanso longo
      />
    </div>
  );
};

export default App;
```

### `PomodoroTimer.tsx`
Este componente gerencia toda a lógica do método Pomodoro, incluindo:
- Temporização
- Alternância entre **trabalho** e **descanso**
- Contagem de **ciclos completados**

### `Timer.tsx`
Um componente que exibe o tempo restante em um formato amigável e indica se o usuário está em um ciclo de trabalho ou descanso.

## 📦 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** e o **npm** (ou **yarn**) instalados em sua máquina.

### Passos para Rodar
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/pomodoro-timer.git
   cd pomodoro-timer
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra o navegador em `http://localhost:5173` para visualizar o app.

## 🔧 Personalização
Você pode alterar os tempos de **trabalho** e **descanso** diretamente no componente `App.tsx`:
```tsx
<PomodoroTimer
  pomodoroTime={1500} // Altere aqui o tempo de trabalho em segundos
  shortRestTime={300} // Altere aqui o tempo de descanso curto em segundos
  longRestTime={900}  // Altere aqui o tempo de descanso longo em segundos
  cycles={4}          // Altere aqui o número de ciclos antes de um descanso longo
/>
```

## 🖼️ Demonstração
Aqui está uma prévia do aplicativo:

![Pomodoro Timer Preview](pomodoro-timer-preview.png)

## 🛠️ Contribuindo
Sinta-se à vontade para contribuir com este projeto! Crie uma issue ou um pull request para melhorias e novas funcionalidades.

### Como Contribuir
1. **Fork este repositório**
2. Crie uma nova branch: `git checkout -b minha-nova-feature`
3. Faça suas alterações e commit: `git commit -m 'Adicionei uma nova feature'`
4. Envie para o branch: `git push origin minha-nova-feature`
5. Abra um **Pull Request**

## 📝 Licença
Este projeto está sob a licença **MIT**. Sinta-se à vontade para usá-lo e modificá-lo como desejar.

---

Feito com ❤️ por [Moab Macena](https://github.com/moabdev).