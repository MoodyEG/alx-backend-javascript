namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    public getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    public getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC === undefined) {
        return "No available teacher";
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
}
