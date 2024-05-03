const express=require('express')
const song = require('./song')

const addData = async (req,res) =>{
    try{
        const data = await song.create(req.body);
        res.status(200).json({message:'added successfully !',data})
    }catch(e)
    {
        res.status(500).json({message:'invalid'})
    }
}

const getData = async (req,res) =>{
    try{
        const data = await song.find({});
        res.status(200).json({length:data.length,data:data})
    }catch(e)
    {
        res.status(500).json({message:'invalid'})
    }
}

const getMusicByDir = async (req,res) =>{
    try{
        console.log(req.body.MusicDirector)
        const data = await song.find(
            {MusicDirector: {$in: req.body.MusicDirector}}
        )
        res.status(200).json({MusicDirector:req.body.MusicDirector, data})
    }catch(e)
    {
        res.status(500).json({message:'invalid'})
    }
}

const getMusicByDirandSinger = async (req,res) =>{
    try{
        const data = await song.find({
            MusicDirector: {$in: req.body.MusicDirector},
            Singer: {$in: req.body.Singer}
        })
        res.status(200).json({MusicDirector: req.body.MusicDirector,Singer: req.body.Singer ,data})
    }catch(e)
    {
        res.status(500).json({message:'error'})
    }
}

const getMusicBySingerandFilm = async (req,res) =>{
    try{
        const data = await song.find({
            Singer:{$in:req.body.Singer},
            FilmName:{$in:req.body.FilmName}
        })
        res.status(200).json({Singer:req.body.Singer,FilmName:req.body.FilmName,data})
    }catch(e)
    {
        res.status(500).json({message:'error'})
    }
}

const deleteSong = async (req,res) =>{
    try{
        const data = await song.deleteOne({
            SongName: {$in: req.body.SongName}
        })
        res.status(200).json({message: 'deleted successfully',data})
    }catch(e)
    {
        res.status(500).json({message:'error'})
    }
}

const updateDoc = async (req,res) => {
    try{
        const data = await song.updateOne(
            {FilmName: {$in: req.body.FilmName}},
            {$set:{Actor: req.body.Actor, Actress: req.body.Actress}}
        )
        res.status(200).json({message:'document updated successfully',data})
    }catch(e)
    {
        res.status(500).json({message:'error'})
    }
}

module.exports = {addData, getData, getMusicByDir, getMusicByDirandSinger, deleteSong, getMusicBySingerandFilm, updateDoc}