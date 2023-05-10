declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare module "*.jpg" {
    const value: any;
    export = value;
}
declare module "*.jpeg" {
    const value: any;
    export = value;
}
declare module "*.png" {
    const value: any;
    export = value;
}
