export class CreateTaskDto {
  readonly title: string;
  readonly description?: string | null;
  readonly status: string;
}
