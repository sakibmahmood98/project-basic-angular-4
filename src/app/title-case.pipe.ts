import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null;

    

    let words = value.split(' ');
    for (var i = 0;i <words.length; i++) {

      let word = words[i];

      if(i> 0 && this.isPreposition(words[i]))
      words[i] = word.toLowerCase();
      else
      words[i] = this.toTitleCase(word);

    }
    return words.join(' ');
  }

  private toTitleCase(word:string): string {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word:string): boolean {

    let Prepositions = [
      'of',
      'the',
      'for'
    ];

    return Prepositions.includes(word.toLowerCase());
  }

}
