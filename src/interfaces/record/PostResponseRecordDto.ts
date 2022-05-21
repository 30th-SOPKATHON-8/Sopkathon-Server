import { PostBaseResponseDto } from "../common/PostBaseResponseDto";

export interface PostResponseDto extends PostBaseResponseDto {
  title: string;
  price: string;
  isXibal: boolean;
  content: string;
  createdAt: string;
}
