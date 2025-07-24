import {ImageLoaderProps} from 'types/imageLoaderProps';

export default function ImageLoader({ src, width, quality = 100 }: ImageLoaderProps) {
    if(src.startsWith("http://") || src.startsWith("https://")) {
        return src;
    }

    return `https://hyungyeong77.github.io/hodadoc${src}?w=${width}&q=${quality}`;
}