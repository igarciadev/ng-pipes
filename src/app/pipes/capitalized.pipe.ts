import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

    transform(value: string, allWords: boolean = true): string {

        let words: string[] = value.toLowerCase().split(' ');

        if (allWords) {
            for (let i in words) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
        } else {
            words[0] = words[0][0].toUpperCase() + words[0].substring(1);
        }

        return words.join(' ');
    }
}
