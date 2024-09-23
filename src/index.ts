import { instanceToPlain } from 'class-transformer';

export class Serializable {
  public toJSON(): Record<string, unknown> {
    return instanceToPlain(this);
  }
}
