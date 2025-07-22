import {ImageLoaderProps} from 'types/imageLoaderProps';

export default function ImageLoader({ src, width, quality = 100 }: ImageLoaderProps) {
    return `https://hyungyeong77.github.io/hodadoc${src}?w=${width}&q=${quality}`;
}