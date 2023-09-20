from django.db import models
from main.subModels.game import Game
from main.subModels.user import User
from main.enum.gameEnum import GameEnum

NOTE_CHOICES = [
    ('3', GameEnum.HORRIBLE.value),
    ('5', GameEnum.MEH.value),
    ('7', GameEnum.FINE.value),
    ('8', GameEnum.GOOD.value),
    ('9', GameEnum.GREAT.value),
    ('10', GameEnum.BEST.value)
]

PROGRESS_CHOICES = [
    ('Plan', GameEnum.PLAN.value), 
    ('Play', GameEnum.PLAY.value),
    ('Drop', GameEnum.DROP.value),
    ('Hold', GameEnum.HOLD.value),
    ('Replay', GameEnum.REPLAY.value),
    ('Complete', GameEnum.COMPLETE.value)
]

class Registry(models.Model):
    note = models.CharField(max_length = 30,  choices=NOTE_CHOICES)
    favorite = models.BooleanField(default=False)
    recommendation = models.BooleanField(default=False)
    progress = models.CharField(max_length = 30, default=GameEnum.PLAN.value, choices=PROGRESS_CHOICES)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"\n| Id: {self.id}\n| Note: {self.note}, Favorite: {self.favorite}, Progress: {self.progress} |\n"