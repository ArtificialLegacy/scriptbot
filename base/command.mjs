class Command {
  constructor(){
    this.name;
    this.category;
    this.description;
    this.action;
    this.cooldown;
    this.cooldownActives = {};
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
  run(tempMessage, tempArgs){
    if(!this.cooldownActive){
      this.action(tempMessage, tempArgs);
      if(!this.cooldownActives[tempMessage.guild.id]){
        this.cooldownActives[tempMessage.guild.id] = {};
      }
      if(!this.cooldownActives[tempMessage.guild.id][tempMessage.author.id]){
        this.cooldownActives[tempMessage.guild.id][tempMessage.author.id] = {
          "active": false,
        };
      }
      this.cooldownActives[tempMessage.guild.id][tempMessage.author.id].active = true;
      setTimeout(() => {
        this.cooldownActives[tempMessage.guild.id][tempMessage.author.id].active = false;
        tempMessage.reply(`filler`);
      }, this.cooldown);
    } else {
      tempMessage.reply(`filler`);
    }
  }
}

export default Command;
