declare module '@x-spacy/serializer' {
  export class Serializable {
    public toJSON(): Record<string, unknown>;
  }
}
