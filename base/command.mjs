class Command {
  constructor(){
    this.name;
    this.category;
    this.description;
    this.action;
    this.cooldown;
    this.cooldownActive = false;
  }
  setName(tempName){
    this.name = tempName;
  }
  setCategory(tempCategory){
    this.category = tempCategory;
  }
  setDescription(tempDescription){
    this.description = tempDescription;
  }
  setCooldown(tempCooldown){
    this.cooldown = tempCooldown;
  }
  setAction(tempAction){
    this.action = tempAction;
  }
  run(tempMessage){
    if(!this.cooldownActive){
      this.action();
      this.cooldownActive = true;
      setTimeout(() => {
        this.cooldownActive = false;
        tempMessage.reply(`filler`);
      }, this.cooldown);
    } else {
      tempMessage.reply(`filler`);
    }
  }
}

export default Command;
