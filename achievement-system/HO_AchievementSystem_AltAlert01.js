//=============================================================================
// HO_AchievementSystem_AltAlert01.js
//=============================================================================

//=============================================================================
/*:
 * @plugindesc v1.0 Extension for HO_Achievement system to give the alert window a different style.
 * @author Horst Onager
 *
 * @param Text Format Reward
 * @desc The format the text will be displayed in. %1: Alert Vocab, %2: Achievement / Reward name
 * @default %1: %2 (%3)
 * 
 * @param Text Format No Reward
 * @desc The format the text will be displayed in. %1: Alert Vocab, %2: Achievement / Reward name
 * @default %1: %2
 *
 * @param Font Size
 * @desc
 * @default 28
 * 
 * @param Window Padding
 * @desc
 * @default 18
 *
 *
 * @help
 * To center the window, in HO_AchievementSystemset set Alert X to
 * Graphics.boxWidth / 2 - this.windowWidth() / 2
 * 
 */

if (Imported.HO_AchievementSystem){

Horsti.AS.AA01 = Horsti.AS.AA01 || {};
Horsti.Parameters = PluginManager.parameters('HO_AchievementSystem_AltAlert01');
Horsti.AS.AA01.textReward = String(Horsti.Parameters['Text Format Reward']);
Horsti.AS.AA01.textNoReward = String(Horsti.Parameters['Text Format No Reward']);
Horsti.AS.AA01.fontSize = Number(Horsti.Parameters['Font Size']);
Horsti.AS.AA01.windowPadding = Number(Horsti.Parameters['Window Padding']);

//=============================================================================

Window_AchievementAlert.prototype.standardFontSize = function() {
    return Horsti.AS.AA01.fontSize;
};

Window_AchievementAlert.prototype.standardPadding = function() {
    return Horsti.AS.AA01.windowPadding;
};

Window_AchievementAlert.prototype.windowWidth = function() {
	var text = '';
	if (Horsti.AS.useRewards && this._reward) {
		text = Horsti.AS.AA01.textReward.format(this.getVocab(), this.getTitle(), Horsti.AS.alertVocabAchievementReward);
	}
	else {
		text = Horsti.AS.AA01.textNoReward.format(this.getVocab(), this.getTitle());
	}
	return this.textWidthEx(text) + this.standardPadding() * 2;
};

Window_AchievementAlert.prototype.calcAllTextHeight = function() {
	var text = '';
	if (Horsti.AS.useRewards && this._reward) {
		text = Horsti.AS.AA01.textReward.format(this.getVocab(), this.getTitle(), Horsti.AS.alertVocabAchievementReward);
	}
	else {
		text = Horsti.AS.AA01.textNoReward.format(this.getVocab(), this.getTitle());
	}
	this._allTextHeight = this.textHeightEx(text, 0, 0);
};

Window_AchievementAlert.prototype.drawSimpleAlert = function() {
	var text = Horsti.AS.AA01.textNoReward.format(this.getVocab(), this.getTitle());
	var x = 0;
	var y = 0;
	this.drawTextEx(text, x, y);
};

Window_AchievementAlert.prototype.drawRewardsAlert = function() {
	var text = Horsti.AS.AA01.textReward.format(this.getVocab(), this.getTitle(), Horsti.AS.alertVocabAchievementReward);
	var x = 0;
	var y = 0;
	this.drawTextEx(text, x, y);
};

}
