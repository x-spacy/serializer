## Serializer

Serializer is a class-transformer extension that allows you to serialize and deserialize classes. It provides a simple and intuitive way to convert objects to JSON and vice versa.

## Usage

Create a class extending the `Serializable` class and add decorators to the properties you want to serialize.

```ts
import { Serializable } from '@x-spacy/serializer';

class User extends Serializable {
  @Expose()
  public name: string;

  @Expose()
  public age: number;

  @Expose({ name: 'created_at' })
  public createdAt: Date;
}
```

Then, when you return the User as a response, you will receive a JSON like this:

```json
{
  "name": "John Doe",
  "age": 30,
  "created_at": "2024-09-23T13:47:21.765Z"
}
```
