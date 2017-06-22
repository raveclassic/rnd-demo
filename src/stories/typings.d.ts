declare module '@storybook/react' {
    type TStory = {
        add: (name: string, renderer: any) => TStory
    };
    export const storiesOf: (name: string, module: any) => TStory;
}

declare module '@storybook/addon-actions' {
    type TAction = (name: string) => any;
    export const action: TAction;
}

declare module '*.css';